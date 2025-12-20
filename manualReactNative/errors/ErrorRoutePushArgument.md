Argument of type '`/movie/${number}`' is not assignable to parameter of type 'RelativePathString | ExternalPathString | "/" |
MoviePoster: min 1.45

problema: onPress={() => router.push(`/movie/${id}` )}

solucion: router.push({ pathname: "/movie/[id]", params: { id: id } })
