import csv

with open("movies.csv") as f:
    reader = csv.reader(f)
    data = list(reader)
    all_movies = data[1:]
    headers = data[0]

headers.append("poster_link")

with open("final.csv", 'a+') as f:
    writer = csv.writer(f)
    writer.writerow(headers)

with open("movie_links.csv") as f:
    reader = csv.reader(f)
    data = list(reader)
    all_movies_links = data[1:]

for movie_item in all_movies:
    poster_found = any(movie_item[8] in movie_links_item for movie_links_item in all_movies_links)
    if poster_found:
        for movie_links_item in all_movies_links:
            if movie_item[8] == movie_links_item[0]:
                movie_item.append(movie_links_item[1])
                if len(movie_item) == 28:
                    with open("final.csv", 'a+') as f:
                        writer = csv.writer(f)
                        writer.writerow(movie_item)