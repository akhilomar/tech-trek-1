from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.tokens import RefreshToken
from accounts.models import Player

class PlayerRegisterSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField(write_only=True)
    username = serializers.SlugField(
        min_length=4,
        max_length=32,
        help_text='Username should be 4-32 characters long including only letters, numbers, hyphen or underscore only',
        validators=[UniqueValidator(
            queryset=Player.objects.all(),
            message='This username has already been taken!'
        )]
    )
    password = serializers.CharField(
        min_length=6,
        max_length=32,
        write_only=True,
        help_text='Password should be 6-32 characters long.',
        required=True
    )
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(
            queryset=Player.objects.all(),
            message='This email has already been registered!'
        )]
    )

    def get_token(self, obj):
        refresh = RefreshToken.for_user(obj)
        return str(refresh.access_token)

    def create(self, validated_data):
        username = validated_data['username']
        email = validated_data['email']
        password = validated_data['password']
        user = Player(
            username=username,
            email=email
        )
        user.set_password(password)
        user.save()

        return user

    class Meta:
        model = Player
        fields = [
            'username',
            'email',
            'password',
        ]

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = [
            'username'
        ]


# from rest_framework import serializers
# from django.contrib.auth.models import User
# from rest_framework.validators import UniqueValidator
# from django.contrib.auth import authenticate
# from accounts.models import UserProfile

# class UserListSerializer(serializers.ModelSerializer):
#     payment_done = serializers.BooleanField(source='profile.payment_done')
#     last_solved = serializers.DateTimeField(source='profile.last_solved')
#     current_question = serializers.IntegerField(source='profile.current_question')

#     class Meta:
#         model = User
#         fields = [
#             'username',
#             'email',
#             'payment_done',
#             'last_solved',
#             'current_question',
#         ]

# class UserDetailSerializer(serializers.ModelSerializer):
#     payment_done = serializers.BooleanField(source='profile.payment_done')
#     last_solved = serializers.DateTimeField(source='profile.last_solved')
#     current_question = serializers.IntegerField(source='profile.current_question')

#     class Meta:
#         model = User
#         fields = [
#             'username',
#             'email',
#             'payment_done',
#             'last_solved',
#             'current_question',
#         ]
#         lookup_field = 'username'

# class UserCreateSerializer(serializers.ModelSerializer):
#     username = serializers.SlugField(
#         min_length=4,
#         max_length=32,
#         help_text='Username should be 4-32 characters long including only letters, numbers, hyphen or underscore only',
#         validators=[UniqueValidator(
#             queryset=User.objects.all(),
#             message='This username has already been taken!'
#         )]
#     )
#     password = serializers.CharField(
#         min_length=6,
#         max_length=32,
#         write_only=True,
#         help_text='Password should be 6-32 characters long.',
#         required=True
#     )
#     email = serializers.EmailField(
#         required=True,
#         validators=[UniqueValidator(
#             queryset=User.objects.all(),
#             message='This email has already been registered!'
#         )]
#     )

#     class Meta:
#         model = User
#         fields = [
#             'username',
#             'email',
#             'password',
#         ]

#     def create(self, validated_data):
#         profile_data = validated_data.pop('profile', None)
#         username = validated_data['username']
#         email = validated_data['email']
#         password = validated_data['password']
#         user = User(
#             username=username,
#             email=email
#         )
#         user.set_password(password)
#         user.save()

#         # profile_data is None currently all other fields
#         # of UserProfile are default, if another field is added 
#         # in future then use this, else **profile_data will be
#         # None and throw an error.
#         # profile = UserProfile(
#         #     user=user,
#         #     **profile_data
#         # )

#         profile = UserProfile(
#             user=user
#         )
#         profile.save()
#         return user

# class UserTokenSerializer(serializers.Serializer):
#     username = serializers.CharField(label='Username')
#     password = serializers.CharField(
#         label='Password',
#         style={'input_type': 'password'},
#         trim_whitespace=False
#     )

#     def validate(self, attrs):
#         username = attrs.get('username')
#         password = attrs.get('password')

#         if username and password:
#             user = authenticate(
#                 request=self.context.get('request'),
#                 username=username,
#                 password=password
#             )

#         if not user:
#             msg = 'Invalid Credentials'
#             raise serializers.ValidationError(msg, code='authorization')

#         attrs['user'] = user
#         return attrs

# class UserLoginSerializer(serializers.ModelSerializer):
#     username = serializers.SlugField(
#         max_length=32,
#         help_text='Username should be 4-32 characters long including only letters, numbers, hyphen or underscore only',
#         required=True
#     )
#     token = serializers.CharField(allow_blank=True, read_only=True)

#     class Meta:
#         model = User
#         fields = [
#             'username',
#             'password',
#             'token',
#         ]
#         extra_kwargs = {"password": {"write_only": True}}

# class UserUpdateSerializer(serializers.ModelSerializer):
#     payment_done = serializers.BooleanField(source='profile.payment_done', default=False)
#     last_solved = serializers.DateTimeField(source='profile.last_solved')
#     current_question = serializers.IntegerField(source='profile.current_question')

#     class Meta:
#         model = User
#         fields = [
#             'username',
#             'email',
#             'payment_done',
#             'last_solved',
#             'current_question',
#         ]

#         lookup_field = 'username'

#     def update(self, instance, validated_data):
#         try:
#             username = self.context.get('request').user.username
#         except:
#             msg = 'Authentication failed'
#             raise serializers.ValidationError(msg, code='authorization')

#         profile_data = validated_data.pop('profile')
#         profile = instance.profile
        
#         for field, value in profile_data.items():
#             if value:
#                 setattr(profile, field, value)
        
#         for field, value in validated_data.items():
#             if value:
#                 setattr(instance, field, value)

#         profile.save()
#         instance.save()

#         return instance
