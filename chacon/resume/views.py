from django.shortcuts import render
# from django.utils.translation import gettext as _

def home(request):
    return render(request, 'resume/home.html')

def cv(request):
    return render(request,'resume/cv.html')