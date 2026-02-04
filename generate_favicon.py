import requests
from PIL import Image, ImageOps, ImageDraw
from io import BytesIO
import os

url = "https://media.licdn.com/dms/image/v2/D4D03AQG9KMP_HuQYqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1683214452050?e=2147483647&v=beta&t=74l-1Jg92Y2r94SuP6_xMZlNRmwYrHsLWrDMTtPG84M"

try:
    response = requests.get(url)
    response.raise_for_status()
    img = Image.open(BytesIO(response.content)).convert("RGBA")

    # Create circular mask
    mask = Image.new('L', img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0) + img.size, fill=255)

    # Fit image to mask
    output = ImageOps.fit(img, mask.size, centering=(0.5, 0.5))
    output.putalpha(mask)

    # Ensure public dir exists
    if not os.path.exists("public"):
        os.makedirs("public")

    # Save
    output.save("public/favicon-circle.png")
    print("SUCCESS: Saved public/favicon-circle.png")
except Exception as e:
    print(f"ERROR: {e}")
