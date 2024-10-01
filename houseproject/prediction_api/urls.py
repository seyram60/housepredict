from django.urls import include, path

from prediction_api import views

urlpatterns = [
   path('home', views.home, name="home"),
   path('prediction', views.prediction, name="prediction"),
   path('about_us', views.about_us, name="about_us"),

]