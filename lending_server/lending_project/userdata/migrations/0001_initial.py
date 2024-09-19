# Generated by Django 4.1.13 on 2024-09-12 09:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=255)),
                ('gst_no', models.CharField(max_length=20)),
                ('constitution', models.CharField(max_length=50)),
            ],
        ),
    ]
