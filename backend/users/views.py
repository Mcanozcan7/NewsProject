from django.shortcuts import render, redirect
from rest_framework import viewsets, permissions, status
from .serializers import *
from .models import *
from rest_framework.response import Response
from django.contrib.auth import get_user_model, authenticate, logout
from knox.models import AuthToken
from rest_framework.views import APIView;
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view




User = get_user_model()

class LoginViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = LoginSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
        
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(request,email=email, password=password)
            if user:
                _, token = AuthToken.objects.create(user)
                return Response({
                    'user': self.serializer_class(user).data,
                    'token': token
                    })
            else:
                return Response({'error':'Invalid Credentials'}, status=401)
        else:
            return Response(serializer.errors,status=400)


class RegisterViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    querryset = User.objects.all()
    serializer_class = RegisterSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
        
    @api_view(['DELETE'])
    def deleteAccount(request):
        if request.method == 'DELETE':
            user_id = request.user.id
            user = get_object_or_404(User, id=user_id)
            try:
                user.delete()
                return Response({'message': 'Hesap başarıyla silindi.'}, status=status.HTTP_204_NO_CONTENT)
            except Exception as e:
                return Response({'message': 'Hesabı silerken bir hata oluştu.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def logout_view(request):
  logout(request)
  return redirect('login')

def some_view(request):
  if request.method == 'POST':
    if 'logout' in request.POST: 
      logout(request)
      return redirect('login')
    

    