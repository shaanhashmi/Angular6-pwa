#1 First add google sdk in index.html.
<!--  
    <script src="//platform.linkedin.com/in.js">
        api_key: 78qr6vyq4s2h48
    </script>
-->
#2 Declare a variable gapi in top of the component after import.
    // declare var gapi: any;
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