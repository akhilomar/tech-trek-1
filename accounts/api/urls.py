from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from accounts.api.views import (
    PlayerRegisterAPIView,
    PlayerListAPIView,
    PlayerDashboardAPIView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', PlayerRegisterAPIView.as_view(), name='register'),
    path('api/list/', PlayerListAPIView.as_view(), name='player-list'),
    path('api/', PlayerDashboardAPIView.as_view(), name='dashboard'),
]
