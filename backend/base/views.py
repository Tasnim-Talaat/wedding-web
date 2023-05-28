from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.contrib.auth import authenticate
from .serializers import UserSerializers,InvitedSerializers,UserserializerWithToken
from django.contrib.auth.models import User
from rest_framework import status
from django.contrib.auth.hashers import make_password
import jwt
from backend.settings import SECRET_KEY
from .models import Invited


@api_view(["POST"])
def register(request):
    try:
        data=request.data
        myEmail=User.objects.filter(email=data["email"])
        print("sss",myEmail)
        if  myEmail :
            return Response({"error":'email  is available in my database'},status=status.HTTP_400_BAD_REQUEST)
        else:
            user=User.objects.create_user(**data)
            return Response({"register":'successfully'},status=status.HTTP_201_CREATED)
    except Exception as ex : 
        return Response({"error":str(ex)},status=status.HTTP_400_BAD_REQUEST)
    

    
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserserializerWithToken(self.user).data 
        for k , v in serializer.items() :
            data[k] = v

        return data
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_Invited(request):
    try:
        new_invited=request.data
        serializer=InvitedSerializers(data=new_invited)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    except Exception as ex : 
        return Response({"error":str(ex)},status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def all_Invited(request):
    invi=Invited.objects.all()
    serializer=InvitedSerializers(invi,many=True)
    return Response(serializer.data,status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def all_users(request):
    user=User.objects.all()
    serializer=UserSerializers(user,many=True)
    return Response(serializer.data,status=status.HTTP_200_OK)