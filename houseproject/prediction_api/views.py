from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'index.html')

def prediction(request):
    return render(request, 'prediction.html')

def about_us(request):
    return render(request, 'about_us.html')
