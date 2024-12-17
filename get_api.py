import os
import google_auth_oauthlib.flow
import googleapiclient.discovery
import googleapiclient.errors

def authenticate_google():
    client_secrets_file = "client_secret.json"
    scopes = ["https://www.googleapis.com/auth/photoslibrary.readonly"]

    flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(client_secrets_file,scopes)
    credentials = flow.run_local_server(port=8080)

    with open("token.json", "w") as token:
        token.write(credentials.to_json())

    try:
        service = googleapiclient.discovery.build("photoslibrary", "v1", credentials=credentials, static_discovery=False)
    except Exception as e:
        print("Error building the API service:", e)
        return None
    
    return service

def list_albums(service):
    try:
        results = service.albums().list(pageSize=10).execute()
        albums = results.get('albums', [])

        if not albums:
            print("アルバムが見つかりませんでした。")
        else:
            print("アルバムリスト:")
            for album in albums:
                print(f"タイトル: {album['title']}, ID: {album['id']}")

    except Exception as e :
        print(f"アルバムの取得中にエラーが発生しました: {e}")

service = authenticate_google()
list_albums(service)

def list_photos_in_album(service, album_id):
    try:
        results = service.mediaItems().search(body={"albumId": album_id}).execute()
        items = results.get('mediaItems', [])

        if not items:
            print("アルバム内に写真がありません。")
        else:
            print("アルバム内の写真:")
            for item in items:
                print(f"タイトル: {item['filename']}, URL: {item['baseUrl']}")  

    except Exception as e:
        print(f"写真の取得中にエラーが発生しました: {e}")
        
album_id = "AJxsMAIsl-41oxoJlkMag3J9mYkn5agP68FnmbpzvYHCn97s60TXn2LYBb-lqbffeKKnLNFvncyx"

service = authenticate_google()
list_photos_in_album(service, album_id)

# def list_photos(service):
#     if not service:
#         print("API service could not be initialized.")
#         return
    
#     try:
#         results = service.mediaItems().list(pageSize=10).execute()
#         items = results.get('mediaItems', [])

#         if not items:
#             print("写真が見つかりませんでした。")
#         else:
#             print("最近の写真:")
#             for item in items:
#                 print(f"タイトル: {item['filename']}, URL: {item['baseUrl']}?sz=1600")
  
#     except googleapiclient.errors.HttpError as e:
#       print("APIリクエスト中にエラーが発生しました:", e)

# service = authenticate_google()
# list_photos(service)