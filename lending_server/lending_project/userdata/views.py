from django.shortcuts import render
import os

from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from .models import UserData
from .models import Document  # Import the Document model


@csrf_exempt
def save_userdata(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        user_data = UserData(
            name=data['name'],
            address=data['address'],
            gst_no=data['gstNo'],
            constitution=data['constitution']
        )
        user_data.save()
        return JsonResponse({'message': 'User data saved successfully'})
    return JsonResponse({'error': 'Invalid request method'}, status=400)

@csrf_exempt
def upload_file(request):
    if request.method == 'POST':
        if 'file' not in request.FILES:
            return JsonResponse({'error': 'No file provided'}, status=400)
        
        file = request.FILES['file']
        file_name = file.name
        file_path = os.path.join(r"E:\Arjun_wrkspace\react_project\lending_db", file_name)

        # Save the file locally
        with open(file_path, 'wb+') as destination:
            for chunk in file.chunks():
                destination.write(chunk)

        # Insert file details into MongoDB using Django ORM
        document = Document.objects.create(
            file_path=file_path
        )

        return JsonResponse({"message": "File uploaded successfully", "documentId": str(document.id)})

    return JsonResponse({'error': 'Invalid request method'}, status=400)