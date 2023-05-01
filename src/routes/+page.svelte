<!-- Markup -->
<div id="orb-container">
<div></div>
    <img class="max-w-[500px] logo" draggable="false" src="/WaveDream_Logo_Optimized.svg" alt="WaveDream.Space" />
    <h1 class="tracking-widest mb-[10px] text-[85px]">WaveDream</h1>

        <div id="button-div" class="w-screen flex justify-center">
            <div id="buttons" class="flex items-center justify-evenly">
                <a href="/learn">
                    <button class="btn btn-sm btn-secondary btn-outline rounded-full tracking-widest px-4">
                        Learn
                    </button>
                </a>
            <div class="w-[20px]"></div>
                <a href="/create">
                    <button class="btn btn-normal btn-primary btn-outline rounded-full tracking-widest">
                        Create
                    </button>
                </a>
             <div class="w-[20px]"></div>
                <a href="/explore">
                    <button class="btn btn-sm btn-secondary btn-outline rounded-full tracking-widest">
                        Explore
                    </button>
                </a>
            </div>
        </div>


</div>
<!-- Styling  -->
<style lang="postcss">
#orb-container {
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle at center, rgb(7, 0, 21), hsl(254, 89%, 10%) 20%, black 100%);
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
}
.logo {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
}
h1 {
font-family: "Jura", sans-serif;
  background: linear-gradient(to left top, rgb(134, 239, 172), rgb(59, 130, 246), rgb(250, 51, 234));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
</style>