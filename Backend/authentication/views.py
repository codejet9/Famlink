from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from .serializers import UserDetailSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from allauth.socialaccount.models import SocialAccount


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://127.0.0.1:3000/"
    client_class = OAuth2Client


class UserDetailsView(APIView):
    def get(self, request):
        user = request.user
        if user.is_authenticated:
            try:
                social_account = SocialAccount.objects.get(user=user)
                serializer = UserDetailSerializer(user)
                return Response(serializer.data)
            except SocialAccount.DoesNotExist:
                return Response({"error": "User has not authenticated using Google."}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "User is not authenticated."}, status=status.HTTP_401_UNAUTHORIZED)