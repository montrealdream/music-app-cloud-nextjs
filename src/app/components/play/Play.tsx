// components
import { PlayControlBadge } from './PlayControlBadge';
import { PlayControlMain } from './PlayControlMain';
import { PlayControlVolume } from './PlayControlVolume';

export const Play = () => {
    return (
        <>
            <div 
                className="flex items-center justify-between py-[20px]"
            > {/* wrap */}
                <PlayControlBadge />

                <PlayControlMain />

                <PlayControlVolume />
            </div>
        </>
    );
}