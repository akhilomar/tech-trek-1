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
