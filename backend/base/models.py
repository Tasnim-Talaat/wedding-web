from django.db import models

# Create your models here.
class Invited (models.Model) : 
    fname = models.CharField(max_length=200 , null=False , blank=False , default="sam")
    lname = models.CharField(max_length=200 , null=False , blank=False , default="john")
    email = models.EmailField(null=False , blank=False , unique=True)
    is_going = models.BooleanField(default=False)
    class Meta:
        db_table = 'invited'
    def __str__(self) :
        return self.email