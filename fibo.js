var n;
sum=0;
n1=0;
n2=1;
n=prompt("Enter the limit");
document.write("Fibonocci serieas are")
for(i=0;i<n;i++)
{
    sum=n1+n2;
  document.write("<br/>"+sum);
  n1=n2;
  n2=sum;
}