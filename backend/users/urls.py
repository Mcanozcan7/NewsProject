from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *

# from knox import views as knox_views

router =DefaultRouter()
router.register('register', RegisterViewset, basename='register')
router.register('login', LoginViewset, basename='login')
# router.register('/',logout_view,basename= 'logout')

urlpatterns = [
    path('logout/', logout_view, name="logout"), 
    path('api/deleteAccount/', RegisterViewset.deleteAccount, name='deleteAccount'),
    # path('logout/', knox_views.LogoutView.as_view(), name='knox_logout'),

]

urlpatterns += router.urls