from rest_framework import serializers
from allauth.socialaccount.models import SocialAccount
from django.contrib.auth.models import User

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']
