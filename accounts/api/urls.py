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

# # from django.conf.urls import url

# # from django.contrib import admin

# from accounts.api.views import (
#     UserCreateAPIView,
#     UserDetailAPIView,
#     UserUpdateAPIView,
#     UserListAPIView,
#     UserDeleteAPIView,
#     UserLoginAPIView,
#     UserLogoutAPIView
# )

# urlpatterns = [
#     path('', UserListAPIView.as_view(), name='user-list'),
#     path('register/', UserCreateAPIView.as_view(), name='user-register'),
#     path('login/', UserLoginAPIView.as_view(), name='user-login'),
#     path('logout/', UserLogoutAPIView.as_view(), name='user-logout'),
#     path('<slug:username>/', UserDetailAPIView.as_view(), name='user-detail'),
#     path('<slug:username>/edit/', UserUpdateAPIView.as_view(), name='user-update'),
#     path('<slug:username>/delete/', UserDeleteAPIView.as_view(), name='user-delete'),
# ]