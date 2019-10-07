from django.contrib import admin
from .models import Player
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserChangeForm

class PlayerChangeForm(UserChangeForm):
    class Meta(UserChangeForm.Meta):
        model = Player

class PlayerUserAdmin(UserAdmin):
    form = PlayerChangeForm
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': (
            'is_paid',
            'current_question',
            'last_solved',
            'unlock_time',
            'avatar',
            'avatar_no'
            )
        }),
    )

admin.site.register(Player, PlayerUserAdmin)
