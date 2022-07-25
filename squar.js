var n=prompt("Enter the limit for Squaring");
sum=0;
m="";
//document.write("<table border='2'><tr><td>"+num+"</td><td>"+Square+"</td></tr><table>");
for(i=0;i<n;i++)
{
    sum=i*i;
    document.write("<table border='2'><tr><td>"+i+"</td><td>"+sum+"</td></tr><table>");
    m+=i +"\n";
}
alert("SQUARE of the number is ="+m+"+"+sum);