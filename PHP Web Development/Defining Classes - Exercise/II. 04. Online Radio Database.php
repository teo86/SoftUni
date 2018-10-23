<?php

class Song1
{
    const TIME_DELIMITER = ":";
    private $artist;
    private $name;
    private $lenght;
    public function __construct(string $artist, string $name, string $lenght)
    {
        $this->setArtist($artist);
        $this->setName($name);
        $this->setLenght($lenght);
    }
    public function getArtist(): string
    {
        return $this->artist;
    }
    private function setArtist(string $artist): void
    {
        if (!$this->rangeValidation($this->stringLenght($artist), 3, 20)) {
            throw new InvalidArtistNameException();
        }
        $this->artist = $artist;
    }
    public function getName(): string
    {
        return $this->name;
    }
    private function setName(string $name): void
    {
        if (!$this->rangeValidation($this->stringLenght($name), 3, 20)) {
            throw new InvalidSongNameException();
        }
        $this->name = $name;
    }
    public function getLenght(): int
    {
        return $this->lenght;
    }
    private function setLenght(string $lenght): void
    {
        $time = explode(self::TIME_DELIMITER, $lenght);
        $minutes = (int)$time[0];
        $seconds = (int)$time[1];
        if (!$this->rangeValidation($minutes, 0, 14)) {
            throw new InvalidSongMinutesException();
        }
        if (!$this->rangeValidation($seconds, 0, 59)) {
            throw new InvalidSongSecondsException();
        }
        $this->lenght = ($minutes * 60) + $seconds;
    }
    private function rangeValidation(int $input, int $start, int $end): bool
    {
        return $input >= $start && $input <= $end;
    }
    public function __toString()
    {
        return "Song added.";
    }
    private function stringLenght(string $string): int
    {
        return strlen(str_replace(" ", "", $string));
    }
}

class Playlist
{
    const DATA_DELIMITER = ";";
    /**
     * @var Song1[]
     */
    private $songs = [];
    private $playlistLen = 0;
    public function __construct()
    {
        $countSongs = (int)trim(fgets(STDIN));
        while ($countSongs--) {
            $songData = explode(self::DATA_DELIMITER, trim(fgets(STDIN)));
            try {
                $song = new Song1(...$songData);
                $this->playlistLen += $song->getLenght();
                echo $song . PHP_EOL;
                $this->songs[] = $song;
            } catch (InvalidSongException $e) {
                echo $e->getMessage() . PHP_EOL;
            }
        }
    }
    private function formatPlaylistLen(int $playlistLen): string
    {
        return intval(gmdate("H",$playlistLen))."h ".gmdate("i\m s\s", $playlistLen);
    }
    public function __toString()
    {
        return "Songs added: " . count($this->songs) . PHP_EOL
            . "Playlist length: " . $this->formatPlaylistLen($this->playlistLen);
    }
}

class InvalidSongException extends Exception
{
    public function __construct(string $message = "Invalid song.", int $code = 0, Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
class InvalidArtistNameException extends InvalidSongException
{
    public function __construct(
        string $message = "Artist name should be between 3 and 20 symbols.",
        int $code = 0,
        Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
class InvalidSongNameException extends InvalidSongException
{
    public function __construct(
        string $message = "Song name should be between 3 and 30 symbols.",
        int $code = 0,
        Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
class InvalidSongLengthException extends InvalidSongException
{
    public function __construct(string $message = "Invalid song length.", int $code = 0, Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
class InvalidSongMinutesException extends InvalidSongLengthException
{
    public function __construct(
        string $message = "Song minutes should be between 0 and 14.",
        int $code = 0,
        Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}
class InvalidSongSecondsException extends InvalidSongLengthException
{
    public function __construct(
        string $message = "Song seconds should be between 0 and 59.",
        int $code = 0,
        Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }
}

$playlist = new Playlist();
echo $playlist;