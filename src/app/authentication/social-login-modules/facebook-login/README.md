#1 First add facebook sdk in index.html.
<!-- <script src="https://connect.facebook.net/en_US/sdk.js"></script> -->
#2 Declare a variable gapi in top of the component after import.
    // declare var FB: any;
#3 Initialized sdk in after view init.
    <!-- 
        ngAfterViewInit(){
            initialization goes here
        } 
    -->
#4 Call the method to login.
    <!-- 
        login method
    -->