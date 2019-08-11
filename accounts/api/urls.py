# from django.conf.urls import url
from django.urls import path
# from django.contrib import admin

from accounts.api.views import (
    UserCreateAPIView,
    UserDetailAPIView,
    UserUpdateAPIView,
    UserListAPIView,
    UserDeleteAPIView,
    UserLoginAPIView,
    UserLogoutAPIView
)

urlpatterns = [
    path('', UserListAPIView.as_view(), name='user-list'),
    path('register/', UserCreateAPIView.as_view(), name='user-register'),
    path('login/', UserLoginAPIView.as_view(), name='user-login'),
    path('logout/', UserLogoutAPIView.as_view(), name='user-logout'),
    path('<slug:username>/', UserDetailAPIView.as_view(), name='user-detail'),
    path('<slug:username>/edit/', UserUpdateAPIView.as_view(), name='user-update'),
    path('<slug:username>/delete/', UserDeleteAPIView.as_view(), name='user-delete'),
]