# Pick List

Pick the exact quantity of each part, skip missing lines, and check the remaining kit.

A packing checklist can tell you that screws are needed without telling you whether all four made it into the box. Pick List keeps a separate count for each part and a total for the kit.

## Pick a partial quantity

1. Enter part names and needed quantities in device settings, for example `Washer|4;Screw|2;Nut|1`. Use a distinct name for each type of part.
2. Turn to **Washer** and click once for each washer you place in the kit. The front tracks picked quantity against the requirement.
3. Turn to another line if a bin is empty. The quantity already picked stays with the original part.

![The Washer line advances from 0/4 to 1/4 and then 2/4.](media/guide/pick-two-washers.gif)

## Correct a count before sealing the box

1. Turn to **Screw** and click for a piece. Press **Start** once if that piece was counted by mistake.
2. Hold the wheel to jump to the next incomplete line, including a part you skipped earlier.
3. Check the rear for outstanding units. **Kit complete** appears when every line has its required count.

![The screw count rises to 1/2 and returns to 0/2.](media/guide/undo-one-screw.gif)

## Example from the emulator

The sample kit needs seven pieces in total. Two washers and one screw give three of seven. A second click after reaching a part’s limit cannot overfill that line, and removing an item at zero leaves the count at zero.

## Run in the emulator

Open BUSY Bar Emulator. From this repository, run:

```sh
~/.busy-emulator/bin/busy-emulator dev --once
```

Press **Back** to exit.

The GIFs are excerpts from the emulator recording. Each front-display pixel is shown at 9× its original width and height. The end frames pause for reading.

[Full recording](media/controls.mp4) · [Rear display](screenshots/back-1.png) · [Firmware test](EMULATOR-QA.md) · [MIT license](LICENSE)

## Device settings

Open **Apps → Pick List → Setup**. Save the fields and reopen the app to use the new values.

- **Parts and quantities** (`kit`). Default: `Washer|4;Screw|2;Nut|1`.
