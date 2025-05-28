
    function adjustGallery() {
        const gallery = document.querySelector('.gallery');
        const container = document.querySelector('.gallery-container');
        const images = gallery.querySelectorAll('img');
    
        if (images.length === 0) return;
    
        // 画像1枚の横幅（300px）+ gap (32px=2rem)を計算
        const imageWidth = images[0].offsetWidth;
        const gap = parseInt(getComputedStyle(gallery).gap);
        
        const containerWidth = container.offsetWidth;
    
        // 一行に何枚の画像が入るか計算
        const imagesPerRow = Math.floor((containerWidth + gap) / (imageWidth + gap));
        
        // ギャラリーの実際の幅を設定して中央寄せする
        gallery.style.width = `${imagesPerRow * (imageWidth + gap) - gap}px`;
    }

    document.addEventListener('DOMContentLoaded', () => {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        const closeBtn = document.getElementById('close');
    
        document.querySelectorAll('.gallery img').forEach(img => {
            img.addEventListener('click', () => {
                modal.style.display = 'block';
                modalImg.src = img.src;
            });
        });
    
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    let prevColumns = 0;
    
    window.addEventListener('load', updateGalleryAnimation);
    window.addEventListener('resize', updateGalleryAnimation);
    
    function updateGalleryAnimation() {
        const gallery = document.querySelector('.gallery');
        const galleryContainer = document.querySelector('.gallery-container');
        const images = document.querySelectorAll('.gallery img');
    
        if(images.length === 0) return;
    
        const imgWidth = images[0].offsetWidth;
        const gap = parseInt(getComputedStyle(gallery).gap);
    
        // コンテナの幅から列数を計算
        const containerWidth = galleryContainer.offsetWidth;
        const columns = Math.floor((containerWidth + gap) / (imgWidth + gap));
    
        // 列数が変化した時のみアニメーションを付与
        if(columns !== prevColumns) {
            gallery.style.opacity = '0.3'; // 一瞬透明に
            setTimeout(() => {
                gallery.style.opacity = '1';
            }, 200);
            prevColumns = columns;
        }
    }
    
    