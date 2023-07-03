<script>
// @ts-nocheck

    import anime from 'animejs/lib/anime.es.js';
	import { onMount } from 'svelte';

    onMount(function(params) {
      
    });
    const goBig = () => {
        anime({
            targets: '.flex .dot',
            translateX: function(el) {
                return el.getAttribute('data-x');
            },
            translateY: function(el, i) {
                return 50 + (-50 * i);
            },
            scale: function(el, i, l) {
                return (l - i) + .25;
            },
            rotate: function() { return anime.random(-360, 360); },
            borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
            duration: function() { return anime.random(1200, 1800); },
            delay: function() { return anime.random(0, 400); },
            direction: 'alternate',
            loop: true
        });
    }
</script>
<div class="grid h-screen place-items-center">
    <div on:mouseover={goBig} on:focus={goBig} class="flex text-center">
        <div data-x="170" class="dot">
            R
        </div>
        <div data-x="170" class="dot">
            N
        </div>
        <div data-x="170" class="dot">
            S
        </div>
    </div>
</div>



<style>
    .dot{
        pointer-events: none;
        position: relative;
        width: 18px;
        height: 18px;
        margin: 1px;
        background-color: currentColor;
        font-size: 14px;
        color: #ffffff;
        background: #18FF74;
    }
</style>