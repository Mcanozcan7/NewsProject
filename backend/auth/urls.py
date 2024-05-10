from django.contrib import admin
from django.urls import path, include
from users.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('users.urls')),
    path('api/auth/',include('knox.urls')),
    # path('logout/', LogoutView.as_view()), 
    

]
