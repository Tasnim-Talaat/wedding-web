from django.urls import path
from . import views


urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.register),
    path('create/', views.create_Invited),
    path('all/', views.all_Invited),
    path('allUser/', views.all_users),
  
    
]