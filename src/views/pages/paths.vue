
<style scoped>


#bg{
    background-image: url('../../assets/pathspromo.jpg');
}
</style>


<template>
    <div>

        <div id="#bg" style="width:100%;height:600px;position:relative;">
            <div style="flex-flow:column;z-index:2;position:absolute;background:none;width:100%;height:500px;display:flex;align-items:center;justify-content:center;" >
                
                <div><h1 style="color:white;font-weight:bold;font-size:40px;background:none;width:80%;border-radius:5px;height:30%;opacity:1;font-family: 'M PLUS 1p', sans-serif;">
                    Learning.Made.Easy
                </h1></div>
                 <div style="width:100%;text-align:center;"><p style="text-align:center;;color:white;font-weight:bold;font-size:20px;background:none;width:100%;border-radius:5px;height:30%;opacity:1;font-family: 'M PLUS 1p', sans-serif;">
                     Dedicated online courses to help you become a competant software developer
                </p></div>
            </div>
            <img style="width:100%;height:100%;z-index:-1;filter:blur(5px)" src="../../assets/pathspromo.jpg"/>

            <div style="position:relative;bottom:30%;left:30%;width:600px;height:300px;background:black">
                <div style="height:30%;width:100%;background:#171123;display:flex;align-items:center;justify-content:center;">
                    <div style="height:100%;display:flex;align-items:center;justify-content:center;padding-top:10px;"><p style="color:white;font-family:'roboto';font-size:20px;">Sign up to my Email List (coming soon)</p></div>
                </div>
                <div style="flex-flow:column;height:69%;width:100%;background:#ffffff;display:flex;align-items:start;justify-content:;">
                   
                   <div style="width:100%;height:50%;background:none;display:flex;align-items:center;">
                    <div class="input-group flex-nowrap" style="width:80%;width:100%;margin:30px;">   
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="addon-wrapping">@</span>
                        </div>
                         <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping">
                        </div>       
                        </div>
                        <div style="display:flex;align-items:center;justify-content:center;width:100%">
                            <button type="button" class="btn btn-success">>Submit</button>
                        </div>
                    </div>
                    
                    </div>
                    
            </div>

        <div style="height:100px;"></div>


        <div style="height:800px;background:#181D27">

            <div style="height:30%;width:100%;background:none;margin-top:50px;display:flex;">
                <div style="width:20%;height:100%;background:red">
                    <img src="../../assets/cheese.jpg" style="width:100%;height:100%;filter:blur(3px)"/>
                </div>
                <div style="flex-grow:1">
                    <div style="margin-top:40px;">
                        <h2 style="color:white;font-family:roboto">Tayyab University Paths</h2>
                        <p style="color:white;font-family:roboto">..........</p>
                        <p style="color:white;font-family:roboto">........</p>
                        <p style="color:white;font-family:roboto">......</p>
                        <p style="color:white;font-family:roboto">....</p>
                        <p style="color:white;font-family:roboto">..</p>
                    </div>
                </div>
                <div style="width:20%;height:100%;background:red">
                    <img src="../../assets/hamster.jpg" style="width:100%;height:100%;filter:blur(3px)"/>
                </div>
            </div>

        </div>

    </div>
</template>


<script>
export default {
    


}
</script>