from rest_framework import serializers
from .models import Invited
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken



class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model =User
        fields ="__all__" 

class InvitedSerializers(serializers.ModelSerializer):
    class Meta:
        model =Invited
        fields ="__all__"
        

class UserserializerWithToken(UserSerializers) : 
    token = serializers.SerializerMethodField(read_only = True)
    class Meta : 
        model = User 
        fields = "__all__"
    def get_token(self , obj) : 
        token = RefreshToken.for_user(obj)
        return str(token.access_token)