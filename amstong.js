var n;
n=prompt("Enetr the 3 digit number");
l=n.length;
sum=0;
for(i=0;i<l;i++)
{
  sum+=n[i]**l;
}
if(sum==n)
{
    alert("the number is amstrong"+n);
}
else
{
    alert("number is not amstrong"+sum);
}

/*for(i=0;i<=3;1++){
    p1=n(i)**3;
}*/