//Tarot JS Function

document.addEventListener('DOMContentLoaded' , function() {
    document.getElementById('drawCard').addEventListener('click', drawRandomCard);
});

// Array with cards data
const tarotCards = [
    { image: 'https://private-user-images.githubusercontent.com/160186545/326153581-149fc0c3-2fe7-40af-8411-294169d66072.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQxOTI3NzksIm5iZiI6MTcxNDE5MjQ3OSwicGF0aCI6Ii8xNjAxODY1NDUvMzI2MTUzNTgxLTE0OWZjMGMzLTJmZTctNDBhZi04NDExLTI5NDE2OWQ2NjA3Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQyN1QwNDM0MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZjQ3ZTAxMjYzNzg2ZTIzY2UxNjI3ZTViNWVmOTQzZWQ2NWZiMDFlNzhhYjFiZDIxNThlODI5MDM1NDU5ZDIyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.N-o0c3g8uzxlCTZkiWcW-_XnzpNPmnzdcPaIAZzUQic', keyword: 'Beginnings'}, //The Fool
    { image: 'https://private-user-images.githubusercontent.com/160186545/326153577-618d8d19-eadd-4a70-8fc4-9b3991280777.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQxOTI3NzksIm5iZiI6MTcxNDE5MjQ3OSwicGF0aCI6Ii8xNjAxODY1NDUvMzI2MTUzNTc3LTYxOGQ4ZDE5LWVhZGQtNGE3MC04ZmM0LTliMzk5MTI4MDc3Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQyN1QwNDM0MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yOGQyNmEwMDAyODg2OTljY2U2ZWQ1NTFjYzUxMzVlMzg5YzY3NTI4MWY1YTRjOTVmMjQyMjYzOTRmM2M3MWUzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.-7lBE0DYQJNAzoR7yFJSFyMvhnAUEGbXpywV26aKNsE', keyword: 'Conscious Awareness'}, //The Magician
    { image: 'https://private-user-images.githubusercontent.com/160186545/326153582-1824356d-6e69-493a-81a0-52a4ddeb2a51.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQxOTI3NzksIm5iZiI6MTcxNDE5MjQ3OSwicGF0aCI6Ii8xNjAxODY1NDUvMzI2MTUzNTgyLTE4MjQzNTZkLTZlNjktNDkzYS04MWEwLTUyYTRkZGViMmE1MS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQyN1QwNDM0MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NjUzNmM1ZmYzYzY2MjEzNTNjYTI0OTM3ZjlmZmRkMjdkNjA4Njk5Nzg2YWU4NzY0MTIyYzYzMTZiZTI5ODdmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.NFAvzpNl984Y1RZ7WmErnjEls-wSPhO7U85SBJjj29s', keyword: 'Potential'}, //High Priestess
    { image: 'https://private-user-images.githubusercontent.com/160186545/326153580-70c2e6a5-353f-47a0-ba21-814998d6a4ab.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQxOTI3NzksIm5iZiI6MTcxNDE5MjQ3OSwicGF0aCI6Ii8xNjAxODY1NDUvMzI2MTUzNTgwLTcwYzJlNmE1LTM1M2YtNDdhMC1iYTIxLTgxNDk5OGQ2YTRhYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQyN1QwNDM0MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00Zjg1MWE2Yjc1YjQyMjk3NjhhMDUyOTMyYWJhYjNjYTU1Mzg5MGM1MDg0MzYyMjRmZmM3YjYxOWIzMmM2NGY3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QPPmrT-73JpT_sPyojjsKWzfRor4otDhSYXc3WgS3Xo', keyword: 'Abundance'}, //The Empress
    { image: 'https://private-user-images.githubusercontent.com/160186545/326153579-0513d078-e025-4699-9c03-43afc2ba645b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQxOTI3NzksIm5iZiI6MTcxNDE5MjQ3OSwicGF0aCI6Ii8xNjAxODY1NDUvMzI2MTUzNTc5LTA1MTNkMDc4LWUwMjUtNDY5OS05YzAzLTQzYWZjMmJhNjQ1Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQyN1QwNDM0MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMTNlZWMyODJiNzBjNWRlNzNhNzgwMDE0ZjE4YmE0ODllYWExNzU4OTg1YjQyOWE5MGFjYWM4YjlmY2JkNTgwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.t_9_Mw1KYOikQNtuEb9R_3Wv0CjZKrsXCuEN38MPttM', keyword: 'Structure'}, //The Emperor
    { image: 'https://private-user-images.githubusercontent.com/160186545/326153583-21df8a1b-1dd1-4283-b5cc-3987f8cde1f8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQxOTI3NzksIm5iZiI6MTcxNDE5MjQ3OSwicGF0aCI6Ii8xNjAxODY1NDUvMzI2MTUzNTgzLTIxZGY4YTFiLTFkZDEtNDI4My1iNWNjLTM5ODdmOGNkZTFmOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQyN1QwNDM0MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05YWIyMjVmN2Y2ZTI4ZjE1NWM1OTRhNjJmMmZiNjliZTYzZjllODA2YWFhZTA4MzMzY2ExYTI0NDI0MjJlNzk5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.J9DLsu9rky-4ik7bEYLByowH733VplC1WoPJugRh7bE', keyword: 'Accomplishments'}, //The World
]

function drawRandomCard() {
    // Get a random card from the tarotCards array
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[randomIndex];

    document.getElementById('cardImage').src = card.image;
    document.getElementById('cardImage').alt = 'Tarot Card: ' + card.keyword;
    document.getElementById('cardKeyword').textContent = card.keyword;  
}

