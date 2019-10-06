from rest_framework import permissions
from datetime import datetime

class IsPaid(permissions.BasePermission):
    """
    Allow access to only paid users.
    """
    message = "Only paid users can access this."
    
    def has_object_permission(self, request, view, obj):
        return obj.is_paid

# class IsTimeOver(permissions.BasePermission):
#     """
#     Allow access only to the players whose wait time is over.
#     """

#     def has_object_permission(self, request, view, obj):
#         tz_info = obj.unlock_time.tzinfo
#         time_left = (obj.unlock_time - datetime.now(tz_info)).total_seconds()

#         if time_left >= 0:
#             return False
#         return True
