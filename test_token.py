import os
import google_auth_oauthlib.flow
import googleapiclient.discovery
import googleapiclient.errors

def authenticate_google():
    client_secrets_file = "client_secret.json"

    scopes = ["https://www.googleapis.com/auth/photoslibrary.readonly"]

    flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(client_secrets_file, scopes
    )

    credentials = flow.run_local_server(port=8080)

    with open("token.json", "w") as token:
        token.write(credentials.to_json())

    service = googleapiclient.discovery.build("photoslibrary", "v1", credentials=credentials)

    return service

# def list_photos(service):
#     results = service.mediaItems().list(pageSize=10).execute()
#     items = results.get('mediaItems', [])

#     if not items:
#         print("写真が見つかりませんでした。")
#     else:
#         print("最近の写真")
#         for item in items:
#             print(f"タイトル: {item['filename']}, URL: {item['baseUrl']}?sz=1600")

service = authenticate_google()

# list_photos(service)