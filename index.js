window.onload = () => {
    
    const val = document.getElementById("search");
    const gs = document.getElementById("google");
    const luck = document.getElementById('lucky');

    const entries = performance.getEntriesByType("navigation");
    entries.forEach((entry) => {
        if(entry.type == "back_forward")
        {
            location.reload();
        }
    });

    const searching = () => {
        if(val.value != '')
        {
            const s = "https://www.google.com/search?q=" + val.value;
            window.location = s;
        }
    }

    val.onkeydown = (e) => {
        if(e.key == 'Enter')
        {
            searching();
        }
    }

    gs.onclick = () => {
        searching();
    }

    luck.onclick = () => {
        window.location = "https://www.google.com/doodles";
    }

} 