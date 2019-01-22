--
-- PostgreSQL database dump
--

-- Dumped from database version 11.0
-- Dumped by pg_dump version 11.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


--
-- Name: album_songs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.album_songs (
    id integer NOT NULL,
    album_id integer,
    song_id integer,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


--
-- Name: album_songs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.album_songs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: album_songs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.album_songs_id_seq OWNED BY public.album_songs.id;


--
-- Name: albums; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.albums (
    id integer NOT NULL,
    title character varying(255),
    album_art character varying(255),
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


--
-- Name: albums_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.albums_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: albums_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.albums_id_seq OWNED BY public.albums.id;


--
-- Name: artist_songs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.artist_songs (
    id integer NOT NULL,
    artist_id integer,
    song_id integer,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


--
-- Name: artist_songs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.artist_songs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: artist_songs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.artist_songs_id_seq OWNED BY public.artist_songs.id;


--
-- Name: artists; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.artists (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


--
-- Name: artists_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.artists_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: artists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.artists_id_seq OWNED BY public.artists.id;


--
-- Name: playlist_songs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.playlist_songs (
    id integer NOT NULL,
    playlist_id integer,
    song_id integer,
    song_order integer,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


--
-- Name: playlists; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.playlists (
    id integer NOT NULL,
    title character varying(255),
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


--
-- Name: songs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.songs (
    id integer NOT NULL,
    title character varying(255),
    youtube_id character varying(255),
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


--
-- Name: song_data; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.song_data AS
 SELECT albums.album_art,
    songs.id AS song_id,
    songs.title AS song_title,
    artists.name AS artist,
    albums.title AS album_name
   FROM ((((public.artists
     JOIN public.artist_songs ON ((artists.id = artist_songs.artist_id)))
     JOIN public.songs ON ((songs.id = artist_songs.song_id)))
     JOIN public.album_songs ON ((album_songs.song_id = songs.id)))
     JOIN public.albums ON ((albums.id = album_songs.album_id)));


--
-- Name: user_playlists; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_playlists (
    id integer NOT NULL,
    user_id integer,
    playlist_id integer,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


--
-- Name: playlist_data; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.playlist_data AS
 SELECT user_playlists.user_id,
    playlists.title AS playlist_title,
    playlist_songs.song_order,
    song_data.song_title,
    song_data.artist,
    song_data.album_name
   FROM (((public.user_playlists
     JOIN public.playlists ON ((playlists.id = user_playlists.playlist_id)))
     JOIN public.playlist_songs ON ((playlist_songs.playlist_id = playlists.id)))
     JOIN public.song_data ON ((song_data.song_id = playlist_songs.song_id)));


--
-- Name: playlist_songs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.playlist_songs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: playlist_songs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.playlist_songs_id_seq OWNED BY public.playlist_songs.id;


--
-- Name: playlists_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.playlists_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: playlists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.playlists_id_seq OWNED BY public.playlists.id;


--
-- Name: songs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.songs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: songs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.songs_id_seq OWNED BY public.songs.id;


--
-- Name: user_playlists_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.user_playlists_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: user_playlists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.user_playlists_id_seq OWNED BY public.user_playlists.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255),
    password character varying(255),
    firstname character varying(255),
    lastname character varying(255),
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: album_songs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album_songs ALTER COLUMN id SET DEFAULT nextval('public.album_songs_id_seq'::regclass);


--
-- Name: albums id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.albums ALTER COLUMN id SET DEFAULT nextval('public.albums_id_seq'::regclass);


--
-- Name: artist_songs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artist_songs ALTER COLUMN id SET DEFAULT nextval('public.artist_songs_id_seq'::regclass);


--
-- Name: artists id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artists ALTER COLUMN id SET DEFAULT nextval('public.artists_id_seq'::regclass);


--
-- Name: playlist_songs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlist_songs ALTER COLUMN id SET DEFAULT nextval('public.playlist_songs_id_seq'::regclass);


--
-- Name: playlists id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlists ALTER COLUMN id SET DEFAULT nextval('public.playlists_id_seq'::regclass);


--
-- Name: songs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.songs ALTER COLUMN id SET DEFAULT nextval('public.songs_id_seq'::regclass);


--
-- Name: user_playlists id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_playlists ALTER COLUMN id SET DEFAULT nextval('public.user_playlists_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."SequelizeMeta" (name) FROM stdin;
20190110030441-create-artist.js
20190110030635-create-song.js
20190110030732-create-album.js
20190110030937-create-playlist.js
20190110031035-create-user.js
20190111025651-create-artist-song.js
20190111031026-create-album-song.js
20190111031700-create-user-playlist.js
20190111032803-create-playlist-song.js
\.


--
-- Data for Name: album_songs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.album_songs (id, album_id, song_id, "createdAt", "updatedAt") FROM stdin;
1	1	1	2019-01-16 22:20:02.383359-06	\N
2	1	2	2019-01-16 22:20:02.383359-06	\N
3	1	3	2019-01-16 22:20:02.383359-06	\N
4	1	4	2019-01-16 22:20:02.383359-06	\N
5	1	5	2019-01-16 22:20:02.383359-06	\N
6	1	6	2019-01-16 22:20:02.383359-06	\N
7	1	7	2019-01-16 22:20:02.383359-06	\N
8	1	8	2019-01-16 22:20:02.383359-06	\N
9	1	9	2019-01-16 22:20:02.383359-06	\N
10	1	10	2019-01-16 22:20:02.383359-06	\N
11	1	11	2019-01-16 22:20:02.383359-06	\N
12	2	12	2019-01-16 22:20:02.383359-06	\N
13	2	13	2019-01-16 22:20:02.383359-06	\N
14	2	14	2019-01-16 22:20:02.383359-06	\N
15	2	15	2019-01-16 22:20:02.383359-06	\N
16	2	16	2019-01-16 22:20:02.383359-06	\N
17	2	17	2019-01-16 22:20:02.383359-06	\N
18	2	18	2019-01-16 22:20:02.383359-06	\N
19	2	19	2019-01-16 22:20:02.383359-06	\N
20	2	20	2019-01-16 22:20:02.383359-06	\N
21	2	21	2019-01-16 22:20:02.383359-06	\N
22	2	22	2019-01-16 22:20:02.383359-06	\N
23	2	23	2019-01-16 22:20:02.383359-06	\N
24	3	24	2019-01-16 22:20:02.383359-06	\N
25	3	25	2019-01-16 22:20:02.383359-06	\N
26	3	26	2019-01-16 22:20:02.383359-06	\N
27	3	27	2019-01-16 22:20:02.383359-06	\N
28	3	28	2019-01-16 22:20:02.383359-06	\N
29	3	29	2019-01-16 22:20:02.383359-06	\N
30	3	30	2019-01-16 22:20:02.383359-06	\N
31	3	31	2019-01-16 22:20:02.383359-06	\N
32	3	32	2019-01-16 22:20:02.383359-06	\N
33	3	33	2019-01-16 22:20:02.383359-06	\N
34	3	34	2019-01-16 22:20:02.383359-06	\N
35	4	35	2019-01-16 22:20:02.383359-06	\N
36	4	36	2019-01-16 22:20:02.383359-06	\N
37	4	37	2019-01-16 22:20:02.383359-06	\N
38	4	38	2019-01-16 22:20:02.383359-06	\N
39	4	39	2019-01-16 22:20:02.383359-06	\N
40	5	40	2019-01-16 22:20:02.383359-06	\N
41	5	41	2019-01-16 22:20:02.383359-06	\N
42	6	42	2019-01-16 22:20:02.383359-06	\N
43	6	43	2019-01-16 22:20:02.383359-06	\N
44	7	44	2019-01-16 22:20:02.383359-06	\N
45	7	45	2019-01-16 22:20:02.383359-06	\N
46	7	46	2019-01-16 22:20:02.383359-06	\N
47	7	47	2019-01-16 22:20:02.383359-06	\N
48	8	48	2019-01-16 22:20:02.383359-06	\N
49	8	49	2019-01-16 22:20:02.383359-06	\N
50	9	50	2019-01-16 22:20:02.383359-06	\N
51	9	51	2019-01-16 22:20:02.383359-06	\N
52	9	52	2019-01-16 22:20:02.383359-06	\N
53	10	53	2019-01-16 22:20:02.383359-06	\N
54	11	54	2019-01-16 22:20:02.383359-06	\N
55	12	55	2019-01-16 22:20:02.383359-06	\N
56	12	56	2019-01-16 22:20:02.383359-06	\N
57	14	57	2019-01-16 22:20:02.383359-06	\N
58	15	58	2019-01-16 22:20:02.383359-06	\N
59	16	59	2019-01-16 22:20:02.383359-06	\N
60	17	60	2019-01-16 22:20:02.383359-06	\N
61	18	61	2019-01-16 22:20:02.383359-06	\N
62	18	62	2019-01-16 22:20:02.383359-06	\N
63	18	63	2019-01-16 22:20:02.383359-06	\N
64	18	64	2019-01-16 22:20:02.383359-06	\N
65	18	65	2019-01-16 22:20:02.383359-06	\N
66	18	66	2019-01-16 22:20:02.383359-06	\N
67	18	67	2019-01-16 22:20:02.383359-06	\N
68	18	68	2019-01-16 22:20:02.383359-06	\N
69	18	69	2019-01-16 22:20:02.383359-06	\N
70	18	70	2019-01-16 22:20:02.383359-06	\N
71	18	71	2019-01-16 22:20:02.383359-06	\N
72	18	72	2019-01-16 22:20:02.383359-06	\N
73	19	73	2019-01-16 22:20:02.383359-06	\N
74	19	74	2019-01-16 22:20:02.383359-06	\N
75	19	75	2019-01-16 22:20:02.383359-06	\N
76	19	76	2019-01-16 22:20:02.383359-06	\N
77	19	77	2019-01-16 22:20:02.383359-06	\N
78	19	78	2019-01-16 22:20:02.383359-06	\N
79	19	79	2019-01-16 22:20:02.383359-06	\N
80	19	80	2019-01-16 22:20:02.383359-06	\N
81	19	81	2019-01-16 22:20:02.383359-06	\N
82	19	82	2019-01-16 22:20:02.383359-06	\N
83	19	83	2019-01-16 22:20:02.383359-06	\N
84	19	84	2019-01-16 22:20:02.383359-06	\N
85	19	85	2019-01-16 22:20:02.383359-06	\N
86	19	86	2019-01-16 22:20:02.383359-06	\N
87	20	87	2019-01-16 22:20:02.383359-06	\N
88	20	88	2019-01-16 22:20:02.383359-06	\N
89	20	89	2019-01-16 22:20:02.383359-06	\N
90	20	90	2019-01-16 22:20:02.383359-06	\N
91	20	91	2019-01-16 22:20:02.383359-06	\N
92	20	92	2019-01-16 22:20:02.383359-06	\N
93	20	93	2019-01-16 22:20:02.383359-06	\N
94	20	94	2019-01-16 22:20:02.383359-06	\N
95	20	95	2019-01-16 22:20:02.383359-06	\N
96	20	96	2019-01-16 22:20:02.383359-06	\N
97	20	97	2019-01-16 22:20:02.383359-06	\N
98	20	98	2019-01-16 22:20:02.383359-06	\N
99	20	99	2019-01-16 22:20:02.383359-06	\N
100	21	100	2019-01-16 22:20:02.383359-06	\N
101	21	101	2019-01-16 22:20:02.383359-06	\N
102	21	102	2019-01-16 22:20:02.383359-06	\N
103	21	103	2019-01-16 22:20:02.383359-06	\N
104	21	104	2019-01-16 22:20:02.383359-06	\N
105	21	105	2019-01-16 22:20:02.383359-06	\N
106	21	106	2019-01-16 22:20:02.383359-06	\N
107	21	107	2019-01-16 22:20:02.383359-06	\N
108	21	108	2019-01-16 22:20:02.383359-06	\N
109	21	109	2019-01-16 22:20:02.383359-06	\N
110	21	110	2019-01-16 22:20:02.383359-06	\N
111	22	111	2019-01-16 22:20:02.383359-06	\N
112	22	112	2019-01-16 22:20:02.383359-06	\N
113	22	113	2019-01-16 22:20:02.383359-06	\N
114	22	114	2019-01-16 22:20:02.383359-06	\N
115	22	115	2019-01-16 22:20:02.383359-06	\N
116	22	116	2019-01-16 22:20:02.383359-06	\N
117	22	117	2019-01-16 22:20:02.383359-06	\N
118	22	118	2019-01-16 22:20:02.383359-06	\N
119	22	119	2019-01-16 22:20:02.383359-06	\N
120	22	120	2019-01-16 22:20:02.383359-06	\N
121	22	121	2019-01-16 22:20:02.383359-06	\N
122	22	122	2019-01-16 22:20:02.383359-06	\N
123	23	123	2019-01-16 22:20:02.383359-06	\N
124	23	124	2019-01-16 22:20:02.383359-06	\N
125	23	125	2019-01-16 22:20:02.383359-06	\N
126	23	126	2019-01-16 22:20:02.383359-06	\N
127	23	127	2019-01-16 22:20:02.383359-06	\N
128	23	128	2019-01-16 22:20:02.383359-06	\N
129	23	129	2019-01-16 22:20:02.383359-06	\N
130	23	130	2019-01-16 22:20:02.383359-06	\N
131	23	131	2019-01-16 22:20:02.383359-06	\N
132	23	132	2019-01-16 22:20:02.383359-06	\N
133	23	133	2019-01-16 22:20:02.383359-06	\N
134	24	134	2019-01-16 22:20:02.383359-06	\N
135	24	135	2019-01-16 22:20:02.383359-06	\N
136	24	136	2019-01-16 22:20:02.383359-06	\N
137	24	137	2019-01-16 22:20:02.383359-06	\N
138	24	138	2019-01-16 22:20:02.383359-06	\N
139	24	139	2019-01-16 22:20:02.383359-06	\N
140	24	140	2019-01-16 22:20:02.383359-06	\N
141	24	141	2019-01-16 22:20:02.383359-06	\N
142	24	142	2019-01-16 22:20:02.383359-06	\N
143	24	143	2019-01-16 22:20:02.383359-06	\N
144	24	144	2019-01-16 22:20:02.383359-06	\N
145	24	145	2019-01-16 22:20:02.383359-06	\N
146	24	146	2019-01-16 22:20:02.383359-06	\N
147	24	147	2019-01-16 22:20:02.383359-06	\N
148	24	148	2019-01-16 22:20:02.383359-06	\N
149	24	149	2019-01-16 22:20:02.383359-06	\N
150	24	150	2019-01-16 22:20:02.383359-06	\N
151	25	151	2019-01-16 22:20:02.383359-06	\N
152	25	152	2019-01-16 22:20:02.383359-06	\N
153	25	153	2019-01-16 22:20:02.383359-06	\N
154	25	154	2019-01-16 22:20:02.383359-06	\N
155	25	155	2019-01-16 22:20:02.383359-06	\N
156	25	156	2019-01-16 22:20:02.383359-06	\N
157	25	157	2019-01-16 22:20:02.383359-06	\N
158	25	158	2019-01-16 22:20:02.383359-06	\N
159	25	159	2019-01-16 22:20:02.383359-06	\N
160	25	160	2019-01-16 22:20:02.383359-06	\N
161	25	161	2019-01-16 22:20:02.383359-06	\N
\.


--
-- Data for Name: albums; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.albums (id, title, album_art, "createdAt", "updatedAt") FROM stdin;
1	Tatto You	Rolling_Stones_-_TattooYou.jpg	2019-01-16 22:18:58.999324-06	\N
2	OK Computer	Radiohead.okcomputer.albumart.jpg	2019-01-16 22:18:58.999324-06	\N
3	Life's Rich Pagent	R.E.M._-_Lifes_Rich_Pageant.jpg	2019-01-16 22:18:58.999324-06	\N
4	YES or YES	Twice_–_Yes_or_Yes.png	2019-01-16 22:18:58.999324-06	\N
5	Summer Nights	Twice_Summer_Nights.jpg	2019-01-16 22:18:58.999324-06	\N
6	Page Two	Page_Two_-_Twice_cover.jpg	2019-01-16 22:18:58.999324-06	\N
7	Square up	Black_Pink_-_Square_Up_artwork.png	2019-01-16 22:18:58.999324-06	\N
8	The Ruby	April_–_The_Ruby.png	2019-01-16 22:18:58.999324-06	\N
9	Love Yourself	Ly-her.jpg	2019-01-16 22:18:58.999324-06	\N
10	BBIBBI	IU_–_Bbibbi.png	2019-01-16 22:18:58.999324-06	\N
11	Palette	IU_Palette_final.jpg	2019-01-16 22:18:58.999324-06	\N
12	Just Right	GOT7-Just_Right_EP.jpg	2019-01-16 22:18:58.999324-06	\N
14	I am YOU	I_Am_You_Album_Cover.jpeg	2019-01-16 22:18:58.999324-06	\N
15	We Go Up	We_Go_Up_album_cover.jpg	2019-01-16 22:18:58.999324-06	\N
16	Eclipse	Eclipse_EP_-_Cover.jpg	2019-01-16 22:18:58.999324-06	\N
17	RBB	Red_Velvet_–_RBB.png	2019-01-16 22:18:58.999324-06	\N
18	Murmur	220px-R.E.M._-_Murmur.jpg	2019-01-16 22:18:58.999324-06	\N
19	DAMN.	220px-Kendrick_Lamar_-_Damn.png	2019-01-16 22:18:58.999324-06	\N
20	Pentatonix	220px-Pentatonix_(album).png	2019-01-16 22:18:58.999324-06	\N
21	Classics	Ratatat_Classics.png	2019-01-16 22:18:58.999324-06	\N
22	No Strings Attached	Nsync_No_Strings_Attached.png	2019-01-16 22:18:58.999324-06	\N
23	The Foundation	Zac_Brown_Band_The_Foundation.jpg	2019-01-16 22:18:58.999324-06	\N
24	Abbey Road	Beatles_Abbey_Road.jpg	2019-01-16 22:18:58.999324-06	\N
25	xx	The xx	2019-01-16 22:18:58.999324-06	\N
\.


--
-- Data for Name: artist_songs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.artist_songs (id, artist_id, song_id, "createdAt", "updatedAt") FROM stdin;
1	1	1	2019-01-16 22:31:41.445569-06	\N
2	1	2	2019-01-16 22:31:41.445569-06	\N
3	1	3	2019-01-16 22:31:41.445569-06	\N
4	1	4	2019-01-16 22:31:41.445569-06	\N
5	1	5	2019-01-16 22:31:41.445569-06	\N
6	1	6	2019-01-16 22:31:41.445569-06	\N
7	1	7	2019-01-16 22:31:41.445569-06	\N
8	1	8	2019-01-16 22:31:41.445569-06	\N
9	1	9	2019-01-16 22:31:41.445569-06	\N
10	1	10	2019-01-16 22:31:41.445569-06	\N
11	1	11	2019-01-16 22:31:41.445569-06	\N
12	2	12	2019-01-16 22:31:41.445569-06	\N
13	2	13	2019-01-16 22:31:41.445569-06	\N
14	2	14	2019-01-16 22:31:41.445569-06	\N
15	2	15	2019-01-16 22:31:41.445569-06	\N
16	2	16	2019-01-16 22:31:41.445569-06	\N
17	2	17	2019-01-16 22:31:41.445569-06	\N
18	2	18	2019-01-16 22:31:41.445569-06	\N
19	2	19	2019-01-16 22:31:41.445569-06	\N
20	2	20	2019-01-16 22:31:41.445569-06	\N
21	2	21	2019-01-16 22:31:41.445569-06	\N
22	2	22	2019-01-16 22:31:41.445569-06	\N
23	2	23	2019-01-16 22:31:41.445569-06	\N
24	3	24	2019-01-16 22:31:41.445569-06	\N
25	3	25	2019-01-16 22:31:41.445569-06	\N
26	3	26	2019-01-16 22:31:41.445569-06	\N
27	3	27	2019-01-16 22:31:41.445569-06	\N
28	3	28	2019-01-16 22:31:41.445569-06	\N
29	3	29	2019-01-16 22:31:41.445569-06	\N
30	3	30	2019-01-16 22:31:41.445569-06	\N
31	3	31	2019-01-16 22:31:41.445569-06	\N
32	3	32	2019-01-16 22:31:41.445569-06	\N
33	3	33	2019-01-16 22:31:41.445569-06	\N
34	3	34	2019-01-16 22:31:41.445569-06	\N
35	4	35	2019-01-16 22:31:41.445569-06	\N
36	4	36	2019-01-16 22:31:41.445569-06	\N
37	4	37	2019-01-16 22:31:41.445569-06	\N
38	4	38	2019-01-16 22:31:41.445569-06	\N
39	4	39	2019-01-16 22:31:41.445569-06	\N
40	4	40	2019-01-16 22:31:41.445569-06	\N
41	4	41	2019-01-16 22:31:41.445569-06	\N
42	4	42	2019-01-16 22:31:41.445569-06	\N
43	4	43	2019-01-16 22:31:41.445569-06	\N
44	5	44	2019-01-16 22:31:41.445569-06	\N
45	5	45	2019-01-16 22:31:41.445569-06	\N
46	5	46	2019-01-16 22:31:41.445569-06	\N
47	5	47	2019-01-16 22:31:41.445569-06	\N
48	6	48	2019-01-16 22:31:41.445569-06	\N
49	6	49	2019-01-16 22:31:41.445569-06	\N
50	7	50	2019-01-16 22:31:41.445569-06	\N
51	7	51	2019-01-16 22:31:41.445569-06	\N
52	7	52	2019-01-16 22:31:41.445569-06	\N
53	8	53	2019-01-16 22:31:41.445569-06	\N
54	8	54	2019-01-16 22:31:41.445569-06	\N
55	9	55	2019-01-16 22:31:41.445569-06	\N
56	9	56	2019-01-16 22:31:41.445569-06	\N
57	10	57	2019-01-16 22:31:41.445569-06	\N
58	11	58	2019-01-16 22:31:41.445569-06	\N
59	12	59	2019-01-16 22:31:41.445569-06	\N
60	13	60	2019-01-16 22:31:41.445569-06	\N
61	3	61	2019-01-16 22:31:41.445569-06	\N
62	3	62	2019-01-16 22:31:41.445569-06	\N
63	3	63	2019-01-16 22:31:41.445569-06	\N
64	3	64	2019-01-16 22:31:41.445569-06	\N
65	3	65	2019-01-16 22:31:41.445569-06	\N
66	3	66	2019-01-16 22:31:41.445569-06	\N
67	3	67	2019-01-16 22:31:41.445569-06	\N
68	3	68	2019-01-16 22:31:41.445569-06	\N
69	3	69	2019-01-16 22:31:41.445569-06	\N
70	3	70	2019-01-16 22:31:41.445569-06	\N
71	3	71	2019-01-16 22:31:41.445569-06	\N
72	3	72	2019-01-16 22:31:41.445569-06	\N
73	14	73	2019-01-16 22:31:41.445569-06	\N
74	14	74	2019-01-16 22:31:41.445569-06	\N
75	14	75	2019-01-16 22:31:41.445569-06	\N
76	14	76	2019-01-16 22:31:41.445569-06	\N
77	14	77	2019-01-16 22:31:41.445569-06	\N
78	14	78	2019-01-16 22:31:41.445569-06	\N
79	14	79	2019-01-16 22:31:41.445569-06	\N
80	14	80	2019-01-16 22:31:41.445569-06	\N
81	14	81	2019-01-16 22:31:41.445569-06	\N
82	14	82	2019-01-16 22:31:41.445569-06	\N
83	14	83	2019-01-16 22:31:41.445569-06	\N
84	14	84	2019-01-16 22:31:41.445569-06	\N
85	14	85	2019-01-16 22:31:41.445569-06	\N
86	14	86	2019-01-16 22:31:41.445569-06	\N
87	15	87	2019-01-16 22:31:41.445569-06	\N
88	15	88	2019-01-16 22:31:41.445569-06	\N
89	15	89	2019-01-16 22:31:41.445569-06	\N
90	15	90	2019-01-16 22:31:41.445569-06	\N
91	15	91	2019-01-16 22:31:41.445569-06	\N
92	15	92	2019-01-16 22:31:41.445569-06	\N
93	15	93	2019-01-16 22:31:41.445569-06	\N
94	15	94	2019-01-16 22:31:41.445569-06	\N
95	15	95	2019-01-16 22:31:41.445569-06	\N
96	15	96	2019-01-16 22:31:41.445569-06	\N
97	15	97	2019-01-16 22:31:41.445569-06	\N
98	15	98	2019-01-16 22:31:41.445569-06	\N
99	15	99	2019-01-16 22:31:41.445569-06	\N
100	16	100	2019-01-16 22:31:41.445569-06	\N
101	16	101	2019-01-16 22:31:41.445569-06	\N
102	16	102	2019-01-16 22:31:41.445569-06	\N
103	16	103	2019-01-16 22:31:41.445569-06	\N
104	16	104	2019-01-16 22:31:41.445569-06	\N
105	16	105	2019-01-16 22:31:41.445569-06	\N
106	16	106	2019-01-16 22:31:41.445569-06	\N
107	16	107	2019-01-16 22:31:41.445569-06	\N
108	16	108	2019-01-16 22:31:41.445569-06	\N
109	16	109	2019-01-16 22:31:41.445569-06	\N
110	16	110	2019-01-16 22:31:41.445569-06	\N
111	17	111	2019-01-16 22:31:41.445569-06	\N
112	17	112	2019-01-16 22:31:41.445569-06	\N
113	17	113	2019-01-16 22:31:41.445569-06	\N
114	17	114	2019-01-16 22:31:41.445569-06	\N
115	17	115	2019-01-16 22:31:41.445569-06	\N
116	17	116	2019-01-16 22:31:41.445569-06	\N
117	17	117	2019-01-16 22:31:41.445569-06	\N
118	17	118	2019-01-16 22:31:41.445569-06	\N
119	17	119	2019-01-16 22:31:41.445569-06	\N
120	17	120	2019-01-16 22:31:41.445569-06	\N
121	17	121	2019-01-16 22:31:41.445569-06	\N
122	17	122	2019-01-16 22:31:41.445569-06	\N
123	18	123	2019-01-16 22:31:41.445569-06	\N
124	18	124	2019-01-16 22:31:41.445569-06	\N
125	18	125	2019-01-16 22:31:41.445569-06	\N
126	18	126	2019-01-16 22:31:41.445569-06	\N
127	18	127	2019-01-16 22:31:41.445569-06	\N
128	18	128	2019-01-16 22:31:41.445569-06	\N
129	18	129	2019-01-16 22:31:41.445569-06	\N
130	18	130	2019-01-16 22:31:41.445569-06	\N
131	18	131	2019-01-16 22:31:41.445569-06	\N
132	18	132	2019-01-16 22:31:41.445569-06	\N
133	18	133	2019-01-16 22:31:41.445569-06	\N
134	19	134	2019-01-16 22:31:41.445569-06	\N
135	19	135	2019-01-16 22:31:41.445569-06	\N
136	19	136	2019-01-16 22:31:41.445569-06	\N
137	19	137	2019-01-16 22:31:41.445569-06	\N
138	19	138	2019-01-16 22:31:41.445569-06	\N
139	19	139	2019-01-16 22:31:41.445569-06	\N
140	19	140	2019-01-16 22:31:41.445569-06	\N
141	19	141	2019-01-16 22:31:41.445569-06	\N
142	19	142	2019-01-16 22:31:41.445569-06	\N
143	19	143	2019-01-16 22:31:41.445569-06	\N
144	19	144	2019-01-16 22:31:41.445569-06	\N
145	19	145	2019-01-16 22:31:41.445569-06	\N
146	19	146	2019-01-16 22:31:41.445569-06	\N
147	19	147	2019-01-16 22:31:41.445569-06	\N
148	19	148	2019-01-16 22:31:41.445569-06	\N
149	19	149	2019-01-16 22:31:41.445569-06	\N
150	19	150	2019-01-16 22:31:41.445569-06	\N
151	20	151	2019-01-16 22:31:41.445569-06	\N
152	20	152	2019-01-16 22:31:41.445569-06	\N
153	20	153	2019-01-16 22:31:41.445569-06	\N
154	20	154	2019-01-16 22:31:41.445569-06	\N
155	20	155	2019-01-16 22:31:41.445569-06	\N
156	20	156	2019-01-16 22:31:41.445569-06	\N
157	20	157	2019-01-16 22:31:41.445569-06	\N
158	20	158	2019-01-16 22:31:41.445569-06	\N
159	20	159	2019-01-16 22:31:41.445569-06	\N
160	20	160	2019-01-16 22:31:41.445569-06	\N
161	20	161	2019-01-16 22:31:41.445569-06	\N
\.


--
-- Data for Name: artists; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.artists (id, name, "createdAt", "updatedAt") FROM stdin;
1	Rolling Stones	2019-01-16 22:31:20.727424-06	\N
2	Radio Head	2019-01-16 22:31:20.727424-06	\N
3	R.E.M.	2019-01-16 22:31:20.727424-06	\N
4	TWICE	2019-01-16 22:31:20.727424-06	\N
5	BLACKPINK	2019-01-16 22:31:20.727424-06	\N
6	April	2019-01-16 22:31:20.727424-06	\N
7	BTS	2019-01-16 22:31:20.727424-06	\N
8	IU	2019-01-16 22:31:20.727424-06	\N
9	GOT7	2019-01-16 22:31:20.727424-06	\N
10	Stray Kids	2019-01-16 22:31:20.727424-06	\N
11	NCT DREAM	2019-01-16 22:31:20.727424-06	\N
12	EXID	2019-01-16 22:31:20.727424-06	\N
13	Red Velvet	2019-01-16 22:31:20.727424-06	\N
14	Kendrick Lamar	2019-01-16 22:31:20.727424-06	\N
15	Pentatonix	2019-01-16 22:31:20.727424-06	\N
16	Ratatat	2019-01-16 22:31:20.727424-06	\N
17	NSYNC	2019-01-16 22:31:20.727424-06	\N
18	Zac Brown Band	2019-01-16 22:31:20.727424-06	\N
19	The Beatles	2019-01-16 22:31:20.727424-06	\N
20	The xx	2019-01-16 22:31:20.727424-06	\N
\.


--
-- Data for Name: playlist_songs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.playlist_songs (id, playlist_id, song_id, song_order, "createdAt", "updatedAt") FROM stdin;
1	1	2	1	2019-01-19 11:52:41.114766-06	\N
2	1	4	2	2019-01-19 11:52:41.114766-06	\N
3	1	6	3	2019-01-19 11:52:41.114766-06	\N
4	1	8	4	2019-01-19 11:52:41.114766-06	\N
5	1	1	5	2019-01-19 11:52:41.114766-06	\N
6	2	42	1	2019-01-19 11:52:41.114766-06	\N
7	2	44	2	2019-01-19 11:52:41.114766-06	\N
8	2	77	3	2019-01-19 11:52:41.114766-06	\N
9	2	66	4	2019-01-19 11:52:41.114766-06	\N
10	2	55	5	2019-01-19 11:52:41.114766-06	\N
11	3	44	1	2019-01-19 11:52:41.114766-06	\N
12	3	125	2	2019-01-19 11:52:41.114766-06	\N
13	3	139	3	2019-01-19 11:52:41.114766-06	\N
14	3	153	4	2019-01-19 11:52:41.114766-06	\N
15	3	161	5	2019-01-19 11:52:41.114766-06	\N
\.


--
-- Data for Name: playlists; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.playlists (id, title, "createdAt", "updatedAt") FROM stdin;
1	80s Rock	2019-01-19 10:58:45.155785-06	\N
2	B-day Party	2019-01-19 10:58:45.155785-06	\N
3	Trip to Nepal	2019-01-19 10:58:45.155785-06	\N
\.


--
-- Data for Name: songs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.songs (id, title, youtube_id, "createdAt", "updatedAt") FROM stdin;
1	Start Me Up	\N	2019-01-16 22:08:58.977019-06	\N
2	Hang Fire	\N	2019-01-16 22:08:58.977019-06	\N
3	Slave	\N	2019-01-16 22:08:58.977019-06	\N
4	Little T&A	\N	2019-01-16 22:08:58.977019-06	\N
5	Black Limousine	\N	2019-01-16 22:08:58.977019-06	\N
6	Neighbours	\N	2019-01-16 22:08:58.977019-06	\N
7	Worried About You	\N	2019-01-16 22:08:58.977019-06	\N
8	Tops	\N	2019-01-16 22:08:58.977019-06	\N
9	Heaven	\N	2019-01-16 22:08:58.977019-06	\N
10	No Use in Crying	\N	2019-01-16 22:08:58.977019-06	\N
11	Waiting On A Friend	\N	2019-01-16 22:08:58.977019-06	\N
12	Airbag	\N	2019-01-16 22:08:58.977019-06	\N
13	Paranoid Android	\N	2019-01-16 22:08:58.977019-06	\N
14	Suterranean Homesick Alien	\N	2019-01-16 22:08:58.977019-06	\N
15	Exit Music	\N	2019-01-16 22:08:58.977019-06	\N
16	Let Down	\N	2019-01-16 22:08:58.977019-06	\N
17	Karma Police	\N	2019-01-16 22:08:58.977019-06	\N
18	Fitter Happier	\N	2019-01-16 22:08:58.977019-06	\N
19	Elictionaeering	\N	2019-01-16 22:08:58.977019-06	\N
20	Climbing Up the Walls	\N	2019-01-16 22:08:58.977019-06	\N
21	No Surprises	\N	2019-01-16 22:08:58.977019-06	\N
22	Lucky	\N	2019-01-16 22:08:58.977019-06	\N
23	The Tourist	\N	2019-01-16 22:08:58.977019-06	\N
24	Begin The Begin	\N	2019-01-16 22:08:58.977019-06	\N
25	These Days	\N	2019-01-16 22:08:58.977019-06	\N
26	Fall On Me	\N	2019-01-16 22:08:58.977019-06	\N
27	Cuyahoga	\N	2019-01-16 22:08:58.977019-06	\N
28	Hyeana	\N	2019-01-16 22:08:58.977019-06	\N
29	Underneath The Bunker	\N	2019-01-16 22:08:58.977019-06	\N
30	The Flowers of Guatemala	\N	2019-01-16 22:08:58.977019-06	\N
31	I Believe	\N	2019-01-16 22:08:58.977019-06	\N
32	What if We Give It Away?	\N	2019-01-16 22:08:58.977019-06	\N
33	Just a Touch	\N	2019-01-16 22:08:58.977019-06	\N
34	Superman	\N	2019-01-16 22:08:58.977019-06	\N
35	YES or YES	\N	2019-01-16 22:08:58.977019-06	\N
36	Say You Love Me	\N	2019-01-16 22:08:58.977019-06	\N
37	LALALA	\N	2019-01-16 22:08:58.977019-06	\N
38	YOUNG & WILD	\N	2019-01-16 22:08:58.977019-06	\N
39	YOUNG & WILD	\N	2019-01-16 22:08:58.977019-06	\N
40	Dance The Night Away	\N	2019-01-16 22:08:58.977019-06	\N
41	Chillax	\N	2019-01-16 22:08:58.977019-06	\N
42	Cheer Up	\N	2019-01-16 22:08:58.977019-06	\N
43	소중한 사랑 Precious Love	\N	2019-01-16 22:08:58.977019-06	\N
44	DDU-DU DDU-DU	\N	2019-01-16 22:08:58.977019-06	\N
45	Forever Young	\N	2019-01-16 22:08:58.977019-06	\N
46	Really	\N	2019-01-16 22:08:58.977019-06	\N
47	See U Later	\N	2019-01-16 22:08:58.977019-06	\N
48	Oh! My mistake	\N	2019-01-16 22:08:58.977019-06	\N
49	The Blue Bird	\N	2019-01-16 22:08:58.977019-06	\N
50	IDOL	\N	2019-01-16 22:08:58.977019-06	\N
51	DNA	\N	2019-01-16 22:08:58.977019-06	\N
52	MIC DROP	\N	2019-01-16 22:08:58.977019-06	\N
53	BBIBBI	\N	2019-01-16 22:08:58.977019-06	\N
54	Palette	\N	2019-01-16 22:08:58.977019-06	\N
55	Just Right	\N	2019-01-16 22:08:58.977019-06	\N
56	Nice	\N	2019-01-16 22:08:58.977019-06	\N
57	Get Cool	\N	2019-01-16 22:08:58.977019-06	\N
58	We Go Up	\N	2019-01-16 22:08:58.977019-06	\N
59	How Why	\N	2019-01-16 22:08:58.977019-06	\N
60	RBB	\N	2019-01-16 22:08:58.977019-06	\N
61	Radio Free Europe	\N	2019-01-16 22:08:58.977019-06	\N
62	Pilgrimage	\N	2019-01-16 22:08:58.977019-06	\N
63	Laughing	\N	2019-01-16 22:08:58.977019-06	\N
64	Talk About the Passion	\N	2019-01-16 22:08:58.977019-06	\N
65	Moral Kiosk	\N	2019-01-16 22:08:58.977019-06	\N
66	Perfect Circle	\N	2019-01-16 22:08:58.977019-06	\N
67	Catapult	\N	2019-01-16 22:08:58.977019-06	\N
68	Sitting Still	\N	2019-01-16 22:08:58.977019-06	\N
69	9 - 9	\N	2019-01-16 22:08:58.977019-06	\N
70	Shaking Through	\N	2019-01-16 22:08:58.977019-06	\N
71	We Talk	\N	2019-01-16 22:08:58.977019-06	\N
72	West Of The Fields	\N	2019-01-16 22:08:58.977019-06	\N
73	BLOOD.	\N	2019-01-16 22:08:58.977019-06	\N
74	DNA.	\N	2019-01-16 22:08:58.977019-06	\N
75	YAH.	\N	2019-01-16 22:08:58.977019-06	\N
76	ELEMENT.	\N	2019-01-16 22:08:58.977019-06	\N
77	FEEL.	\N	2019-01-16 22:08:58.977019-06	\N
78	LOYALTY.	\N	2019-01-16 22:08:58.977019-06	\N
79	PRIDE.	\N	2019-01-16 22:08:58.977019-06	\N
80	HUMBLE.	\N	2019-01-16 22:08:58.977019-06	\N
81	LUST.	\N	2019-01-16 22:08:58.977019-06	\N
82	LOVE.	\N	2019-01-16 22:08:58.977019-06	\N
83	XXX.	\N	2019-01-16 22:08:58.977019-06	\N
84	FEAR.	\N	2019-01-16 22:08:58.977019-06	\N
85	GOD.	\N	2019-01-16 22:08:58.977019-06	\N
86	DUCKWORTH.	\N	2019-01-16 22:08:58.977019-06	\N
87	Na Na Na	\N	2019-01-16 22:08:58.977019-06	\N
88	Can't Sleep Love	\N	2019-01-16 22:08:58.977019-06	\N
89	Sing	\N	2019-01-16 22:08:58.977019-06	\N
90	Misbehavin'	\N	2019-01-16 22:08:58.977019-06	\N
91	Ref	\N	2019-01-16 22:08:58.977019-06	\N
92	First Things First	\N	2019-01-16 22:08:58.977019-06	\N
93	Rose Gold	\N	2019-01-16 22:08:58.977019-06	\N
94	If I Ever Fall In Love (feat. Jason Darulo)	\N	2019-01-16 22:08:58.977019-06	\N
95	Cracked	\N	2019-01-16 22:08:58.977019-06	\N
96	Water	\N	2019-01-16 22:08:58.977019-06	\N
97	Take Me Home	\N	2019-01-16 22:08:58.977019-06	\N
98	New Year's Day	\N	2019-01-16 22:08:58.977019-06	\N
99	Light In The Hallway	\N	2019-01-16 22:08:58.977019-06	\N
100	Montanita	\N	2019-01-16 22:08:58.977019-06	\N
101	Lex	\N	2019-01-16 22:08:58.977019-06	\N
102	Gettysburg	\N	2019-01-16 22:08:58.977019-06	\N
103	Wildcat	\N	2019-01-16 22:08:58.977019-06	\N
104	Tropicana	\N	2019-01-16 22:08:58.977019-06	\N
105	Loud Pipes	\N	2019-01-16 22:08:58.977019-06	\N
106	Kennedy	\N	2019-01-16 22:08:58.977019-06	\N
107	Swisha	\N	2019-01-16 22:08:58.977019-06	\N
108	Nostrand	\N	2019-01-16 22:08:58.977019-06	\N
109	Tacobel Canon	\N	2019-01-16 22:08:58.977019-06	\N
110	Truman	\N	2019-01-16 22:08:58.977019-06	\N
111	Bye Bye Bye	\N	2019-01-16 22:08:58.977019-06	\N
112	It's Gonna Be Me	\N	2019-01-16 22:08:58.977019-06	\N
113	Space Cowboy (Yippie-Yi-Yay)	\N	2019-01-16 22:08:58.977019-06	\N
114	Just Got Paid	\N	2019-01-16 22:08:58.977019-06	\N
115	It Makes Me Ill	\N	2019-01-16 22:08:58.977019-06	\N
116	This I Promise You	\N	2019-01-16 22:08:58.977019-06	\N
117	No Strings Attached	\N	2019-01-16 22:08:58.977019-06	\N
118	Digital Get Down	\N	2019-01-16 22:08:58.977019-06	\N
119	Bringin' da Noise	\N	2019-01-16 22:08:58.977019-06	\N
120	That's When I'll Stop Loving You	\N	2019-01-16 22:08:58.977019-06	\N
121	I'll Be Good for You	\N	2019-01-16 22:08:58.977019-06	\N
122	I Thought She Knew	\N	2019-01-16 22:08:58.977019-06	\N
123	Toes	\N	2019-01-16 22:08:58.977019-06	\N
124	Whatever It Is	\N	2019-01-16 22:08:58.977019-06	\N
125	Where the Boat Leaves From	\N	2019-01-16 22:08:58.977019-06	\N
126	Free	\N	2019-01-16 22:08:58.977019-06	\N
127	Chicken Fried	\N	2019-01-16 22:08:58.977019-06	\N
128	Mary	\N	2019-01-16 22:08:58.977019-06	\N
129	Different Kind of Fine	\N	2019-01-16 22:08:58.977019-06	\N
130	Highway 20 Ride	\N	2019-01-16 22:08:58.977019-06	\N
131	It's Not OK	\N	2019-01-16 22:08:58.977019-06	\N
132	Jolene	\N	2019-01-16 22:08:58.977019-06	\N
133	Sic 'em on a Chicken	\N	2019-01-16 22:08:58.977019-06	\N
134	Come Together	\N	2019-01-16 22:08:58.977019-06	\N
135	Something	\N	2019-01-16 22:08:58.977019-06	\N
136	Maxwell's Silver Hammer	\N	2019-01-16 22:08:58.977019-06	\N
137	Oh! Darling	\N	2019-01-16 22:08:58.977019-06	\N
138	Octopus's Garden	\N	2019-01-16 22:08:58.977019-06	\N
139	I Want you (She's So Heavy)	\N	2019-01-16 22:08:58.977019-06	\N
140	Here Comes the Sun	\N	2019-01-16 22:08:58.977019-06	\N
141	Because	\N	2019-01-16 22:08:58.977019-06	\N
142	You Never Give Me Your Money	\N	2019-01-16 22:08:58.977019-06	\N
143	Sun King	\N	2019-01-16 22:08:58.977019-06	\N
144	Mean Mr. Mustard	\N	2019-01-16 22:08:58.977019-06	\N
145	Polythene Pam	\N	2019-01-16 22:08:58.977019-06	\N
146	She Came In Through the Bathroom Window	\N	2019-01-16 22:08:58.977019-06	\N
147	Golden Slumbers	\N	2019-01-16 22:08:58.977019-06	\N
148	Carry That Weight	\N	2019-01-16 22:08:58.977019-06	\N
149	The End	\N	2019-01-16 22:08:58.977019-06	\N
150	Her Majesty	\N	2019-01-16 22:08:58.977019-06	\N
151	Intro	\N	2019-01-16 22:08:58.977019-06	\N
152	VCR	\N	2019-01-16 22:08:58.977019-06	\N
153	Crystalised	\N	2019-01-16 22:08:58.977019-06	\N
154	Islands	\N	2019-01-16 22:08:58.977019-06	\N
155	Heart Skipped a Beat	\N	2019-01-16 22:08:58.977019-06	\N
156	Fantasy	\N	2019-01-16 22:08:58.977019-06	\N
157	Shelter	\N	2019-01-16 22:08:58.977019-06	\N
158	Basic Space	\N	2019-01-16 22:08:58.977019-06	\N
159	Infinity	\N	2019-01-16 22:08:58.977019-06	\N
160	Night Time	\N	2019-01-16 22:08:58.977019-06	\N
161	Stars	\N	2019-01-16 22:08:58.977019-06	\N
\.


--
-- Data for Name: user_playlists; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.user_playlists (id, user_id, playlist_id, "createdAt", "updatedAt") FROM stdin;
1	1	1	2019-01-19 11:09:58.582012-06	\N
2	1	2	2019-01-19 11:09:58.582012-06	\N
3	1	3	2019-01-19 11:09:58.582012-06	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, username, password, firstname, lastname, "createdAt", "updatedAt") FROM stdin;
1	ElizCreech	music	Elizabeth	Creech	2019-01-19 11:09:21.500183-06	\N
\.


--
-- Name: album_songs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.album_songs_id_seq', 1, false);


--
-- Name: albums_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.albums_id_seq', 24, true);


--
-- Name: artist_songs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.artist_songs_id_seq', 1, false);


--
-- Name: artists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.artists_id_seq', 1, false);


--
-- Name: playlist_songs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.playlist_songs_id_seq', 1, false);


--
-- Name: playlists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.playlists_id_seq', 1, false);


--
-- Name: songs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.songs_id_seq', 1, false);


--
-- Name: user_playlists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.user_playlists_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: album_songs album_songs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album_songs
    ADD CONSTRAINT album_songs_pkey PRIMARY KEY (id);


--
-- Name: albums albums_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.albums
    ADD CONSTRAINT albums_pkey PRIMARY KEY (id);


--
-- Name: artist_songs artist_songs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artist_songs
    ADD CONSTRAINT artist_songs_pkey PRIMARY KEY (id);


--
-- Name: artists artists_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artists
    ADD CONSTRAINT artists_pkey PRIMARY KEY (id);


--
-- Name: playlist_songs playlist_songs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlist_songs
    ADD CONSTRAINT playlist_songs_pkey PRIMARY KEY (id);


--
-- Name: playlists playlists_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlists
    ADD CONSTRAINT playlists_pkey PRIMARY KEY (id);


--
-- Name: songs songs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.songs
    ADD CONSTRAINT songs_pkey PRIMARY KEY (id);


--
-- Name: user_playlists user_playlists_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_playlists
    ADD CONSTRAINT user_playlists_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: album_songs album_songs_album_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album_songs
    ADD CONSTRAINT album_songs_album_id_fkey FOREIGN KEY (album_id) REFERENCES public.albums(id);


--
-- Name: album_songs album_songs_song_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.album_songs
    ADD CONSTRAINT album_songs_song_id_fkey FOREIGN KEY (song_id) REFERENCES public.songs(id);


--
-- Name: artist_songs artist_songs_artist_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artist_songs
    ADD CONSTRAINT artist_songs_artist_id_fkey FOREIGN KEY (artist_id) REFERENCES public.artists(id);


--
-- Name: artist_songs artist_songs_song_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artist_songs
    ADD CONSTRAINT artist_songs_song_id_fkey FOREIGN KEY (song_id) REFERENCES public.songs(id);


--
-- Name: playlist_songs playlist_songs_playlist_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlist_songs
    ADD CONSTRAINT playlist_songs_playlist_id_fkey FOREIGN KEY (playlist_id) REFERENCES public.playlists(id);


--
-- Name: playlist_songs playlist_songs_song_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlist_songs
    ADD CONSTRAINT playlist_songs_song_id_fkey FOREIGN KEY (song_id) REFERENCES public.songs(id);


--
-- Name: user_playlists user_playlists_playlist_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_playlists
    ADD CONSTRAINT user_playlists_playlist_id_fkey FOREIGN KEY (playlist_id) REFERENCES public.playlists(id);


--
-- Name: user_playlists user_playlists_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_playlists
    ADD CONSTRAINT user_playlists_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

