#include <stdio.h>

int main()
{
    int arr[6] = {4 ,5, 6, 7, 8};
    int n=6;
    int s=21;
    int start=0,end=0;

    for(int i=0; i<n-1; i++){
        int sum=arr[i];
        for(int j=i+1; j<n; j++){
            sum+=arr[j];
            if(sum==s){
                printf("%d %d",i,j); 
                break;
            }
        }
    }

    

    return 0;
}