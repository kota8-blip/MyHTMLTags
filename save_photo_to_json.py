import json
from get_api import authenticate_google

def save_album_photos_to_json(service,album_id, output_file):
    try:
        results = service.mediaItems().search(body={"albumId": album_id}).execute()
        items = results.get('mediaItems', [])

        if not items:
            print("アルバム内に写真がありません。")
        else:
            photos = [{"title": item["filename"], "url": item["baseUrl"]} for item in items]

            with open(output_file, "w") as file:
                json.dump(photos, file, indent=4, ensure_ascii=False)

            print(f"写真データが {output_file} に保存されました。")

    except Exception as e:
        print(f"写真の取得中にエラーが発生しました: {e}")

album_id = "AJxsMAIsl-41oxoJlkMag3J9mYkn5agP68FnmbpzvYHCn97s60TXn2LYBb-lqbffeKKnLNFvncyx"
output_file = "album_photos.json"
service = authenticate_google()
save_album_photos_to_json(service, album_id, output_file)