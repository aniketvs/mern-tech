#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin>>n;

    for(int i=0;i<n;i++){
        if(i==0){
            for(int j=0;j<n;j++){
                cout<<"*";
            }
            cout<<endl;
            continue;
        }
        if(i==n-1){
            cout<<"*";
            break;
        }
        
        cout<<"*";
        for(int j=0;j<n-i-2;j++){
            cout<<" ";
        }
        cout<<"*";
        cout<<endl;
    }

    return 0;
}