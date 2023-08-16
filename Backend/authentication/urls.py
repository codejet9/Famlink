from dj_rest_auth.views import UserDetailsView
from django.urls import path
from authentication.views import GoogleLogin

urlpatterns = [
    path("google/", GoogleLogin.as_view(), name="google_login"),
    path('user/details/', UserDetailsView.as_view(), name='user_details')
]