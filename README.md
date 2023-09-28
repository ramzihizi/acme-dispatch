# acme-dispatch

`acme-dispatch` is a command-line utility designed to handle shipment routing for Acme Inc's product deliveries. It maximizes the total suitability score (SS) for matching shipment destinations with drivers.

## Prerequisites

- Node.js (version 18.10.0 or above)
- npm (version 8.x.x or above)
- Bun.sh (version 1.0.3 or above)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ramzihizi/acme-dispatch.git
   ```

2. Navigate to the project directory:

   ```bash
   cd acme-dispatch
   ```

3. Install dependencies:

   ```bash
   bun install
   ```

## Usage

### Running Locally

Run the application with:

```bash
node index.js [shipments-file] [drivers-file]
```

or

```bash
node . [shipments-file] [drivers-file]
```

or

```bash
sudo npm i -g
```

```bash
acme-dispatch [shipments-file] [drivers-file]
```

## Options

- `shipments-file`: Path to the file containing shipment destinations.
- `drivers-file`: Path to the file containing driver names.

## Examples

```bash
node . shipments.txt drivers.txt
```

## Testing

To run unit and E2E tests:

```bash
bun test
```

```bash
bun test:unit
```

```bash
bun test:e2e
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request.

## License

TBD
