# from django.db import models

from djongo import models

# form submission
class UserData(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    gst_no = models.CharField(max_length=20)
    constitution = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
# file upload
class Document(models.Model):
    file_path = models.CharField(max_length=255)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.file_path