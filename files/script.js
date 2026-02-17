fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const select = document.getElementById('itemSelect');
    const resultDiv = document.getElementById('result');

    // Event listener for dropdown selection change
    select.addEventListener('change', function () {
      const selectedItem = this.value;
      const item = data[selectedItem];
      resultDiv.innerHTML = '';

      if (item) {
        const html = `
          <h2>${selectedItem}</h2>
          <p><strong>Recycle:</strong> ${item.recycle}</p>
          <p><strong>Reuse:</strong> ${item.reuse}</p>
          <div class="image-gallery">
            ${item.images.map(img => `
              <div class="image-card">
                <img src="${img.url}" alt="${img.label}" class="item-img" />
                <p class="label">${img.label}</p>
              </div>
            `).join('')}
          </div>
        `;
        resultDiv.innerHTML = html;
      } else {
        resultDiv.innerHTML = '<p>Please select an item.</p>';
      }
    });
  });
