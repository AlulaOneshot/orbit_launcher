const tracks = new Map<string, HTMLAudioElement>();

// export function register_track(name: string, path: string) {
//     return new Promise((resolve) => {
//         const audio = new Audio(path);
//
//         audio.preload = "auto";
//
//         //TODO: UnComment audio.oncanplaythrough = () => resolve();
//         tracks.set(name, audio)
//     })
// }

export function register_track_looping(name: string, path: string): Promise<void> {
    return new Promise((resolve) => {
        const audio = new Audio(path);
        audio.loop = true;

        audio.preload = "auto";

        audio.oncanplaythrough = () => resolve();
        tracks.set(name, audio)
    })
}

export async function play_track(name: string) {
    await tracks.get(name)?.play();
}

export async function play_track_from(name: string, time: number) {
    let audio = tracks.get(name);
    if (audio) {
        audio.currentTime = time;
        await audio.play();
    }
}

export async function stop_track(name: string) {
    let audio = tracks.get(name);
    if (audio) {
        audio.pause();
        audio.currentTime = 0.0;
    }
}

export function get_track_time(name: string): number | undefined {
    return tracks.get(name)?.currentTime;
}