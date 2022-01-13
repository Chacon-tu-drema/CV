from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    #CV
    path('',include('resume.urls', namespace='resume'))
]
