from accounts.models import Player
from rest_framework import generics, views
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework.response import Response

from accounts.api.serializers import (
    PlayerRegisterSerializer,
    PlayerListSerializer,
    PlayerDashboardSerializer
)

class PlayerRegisterAPIView(generics.CreateAPIView):
    serializer_class = PlayerRegisterSerializer
    queryset = Player.objects.all()
    permission_classes = [AllowAny]

class PlayerListAPIView(generics.ListAPIView):
    serializer_class = PlayerListSerializer
    queryset = Player.objects.all()
    permission_classes = [IsAdminUser]

class PlayerDashboardAPIView(views.APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        player = request.user
        self.check_object_permissions(request, player)
        serializer = PlayerDashboardSerializer(player)
        return Response(serializer.data)

# from django.contrib.auth.models import User
# from rest_framework import generics, views
# from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
# from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
# from rest_framework.authtoken.models import Token
# from rest_framework.response import Response

# from accounts.api.serializers import (
#     UserListSerializer,
#     UserDetailSerializer,
#     UserCreateSerializer,
#     UserLoginSerializer,
#     UserTokenSerializer,
#     UserUpdateSerializer
# )

# class UserCreateAPIView(generics.CreateAPIView):
#     serializer_class = UserCreateSerializer
#     queryset = User.objects.all()
#     permission_classes = [AllowAny]

# class UserDetailAPIView(generics.RetrieveAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserDetailSerializer
#     lookup_field = 'username'
#     permission_classes = [IsAdminUser]

# class UserDeleteAPIView(generics.DestroyAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserDetailSerializer
#     lookup_field = 'username'
#     permission_classes = [IsAdminUser]

# class UserUpdateAPIView(generics.UpdateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserUpdateSerializer
#     lookup_field = 'username'
#     permission_classes = [IsAdminUser]

# class UserListAPIView(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserListSerializer
#     permission_classes = [IsAdminUser]

# class UserLoginAPIView(views.APIView):
#     permission_classes = [AllowAny]
#     serializer_class = UserLoginSerializer

#     def post(self, request, *args, **kwargs):
#         serializer = UserTokenSerializer(
#             data=request.data,
#             context={'request': request}
#         )
#         if serializer.is_valid(raise_exception=True):
#             user = serializer.validated_data['user']
#             token, created = Token.objects.get_or_create(user=user)
#             return Response({
#                 'token': token.key,
#                 'username': user.username,
#             }, status=HTTP_200_OK)

#         return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

# class UserLogoutAPIView(views.APIView):
#     permission_classes = [IsAuthenticated]

#     def post(self, request, *args, **kwargs):
#         try:
#             request.user.auth_token.delete()
#             return Response(status=HTTP_200_OK)
#         except:
#             return Response(status=HTTP_400_BAD_REQUEST)
