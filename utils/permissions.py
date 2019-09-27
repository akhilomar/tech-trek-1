from rest_framework import permissions

class IsPaid(permissions.BasePermission):
    """
    Allow access to only paid users.
    """

    def has_object_permission(self, request, view, obj):
        return obj.is_paid
