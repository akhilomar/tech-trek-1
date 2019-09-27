from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('rest_framework.urls')),
    path('accounts/', include('accounts.api.urls')),
    # path('api/question/', include('questions.api.urls')),
]
