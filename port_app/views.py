from django.shortcuts import render
from django.urls import include
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.

def home(request):
	if request.method == "POST":
		message_name = request.POST['message-name']
		message_email = request.POST['message-mail']
		message = request.POST['message']

		#send an email
		send_mail(
			message_name,
			message,
			message_email,
			['samwillsquaye@gmail.com'],
			fail_silently = False)
		return render(request, 'port_app/home.html', {'message_name': message_name})

	else:
		return render(request, 'port_app/home.html', {})